/**
 * Butterfly Effect Canvas - Lorentz Attractor Animation
 *
 * Pure TypeScript implementation of the Lorentz attractor animation.
 * The Lorentz system is a set of differential equations that exhibits chaotic behavior,
 * creating the characteristic "butterfly" pattern.
 *
 * @see https://en.wikipedia.org/wiki/Lorenz_system
 */

import { BUTTERFLY_CONFIG } from '../constants/butterfly';

/**
 * Represents a single particle in the Lorentz attractor system.
 * Updates its position using the Lorentz differential equations.
 */
export class ButterflyAnimation {
    x: number;
    y: number;
    z: number;
    sigma: number;
    beta: number;
    rho: number;
    dt: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.sigma = BUTTERFLY_CONFIG.SIGMA;
        this.beta = BUTTERFLY_CONFIG.BETA;
        this.rho = BUTTERFLY_CONFIG.RHO;
        this.dt = BUTTERFLY_CONFIG.DELTA_T_INITIAL;
    }

    /**
     * Generate random integer in range [min, max] inclusive
     */
    private randInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Randomize particle position within configured bounds
     */
    randomize(): void {
        this.x = this.randInt(BUTTERFLY_CONFIG.PARTICLE_X_MIN, BUTTERFLY_CONFIG.PARTICLE_X_MAX);
        this.y = this.randInt(BUTTERFLY_CONFIG.PARTICLE_Y_MIN, BUTTERFLY_CONFIG.PARTICLE_Y_MAX);
        this.z = this.randInt(BUTTERFLY_CONFIG.PARTICLE_Z_MIN, BUTTERFLY_CONFIG.PARTICLE_Z_MAX);
        this.dt = BUTTERFLY_CONFIG.DELTA_T_INITIAL;
    }

    /**
     * Update particle position using Lorenz attractor differential equations.
     *
     * The equations are:
     * - dx/dt = σ(y - x)
     * - dy/dt = x(ρ - z) - y
     * - dz/dt = xy - βz
     *
     * Time step gradually increases to create expanding pattern.
     */
    update(): void {
        this.x += this.sigma * (this.y - this.x) * this.dt;
        this.y += (this.x * (this.rho - this.z) - this.y) * this.dt;
        this.z += (this.x * this.y - this.beta * this.z) * this.dt;
        if (this.dt < BUTTERFLY_CONFIG.DELTA_T_MAX) this.dt += BUTTERFLY_CONFIG.DELTA_T_INCREMENT;
    }

    /**
     * Create a copy of this particle at its current position
     */
    copy(): ButterflyAnimation {
        return new ButterflyAnimation(this.x, this.y, this.z);
    }
}

/**
 * Generate random integer in range [min, max] inclusive
 */
const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Animation manager for the Lorentz Attractor visualization.
 * Manages canvas, particle system, rendering loop, and event handling.
 */
export class LorentzParticle {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    particles: ButterflyAnimation[] = [];
    colors: string[] = [];
    animationId: number | null = null;
    alpha: number = 100;
    isDark: boolean = false;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const context = canvas.getContext('2d');
        if (!context) {
            const error = new Error(
                'Could not get 2D context from canvas. Canvas rendering may not be supported in this browser.',
            );
            console.error('[ButterflyAnimation]', error);
            throw error;
        }
        this.ctx = context;
        this.isDark = document.documentElement.classList.contains('dark');
        this.init();
        this.setupEventListeners();
    }

    /**
     * Calculate number of particles based on viewport width.
     * Fewer particles on mobile for better performance.
     */
    private getNumberOfParticles(): number {
        return window.innerWidth < BUTTERFLY_CONFIG.MOBILE_BREAKPOINT
            ? BUTTERFLY_CONFIG.PARTICLE_COUNT_MOBILE
            : BUTTERFLY_CONFIG.PARTICLE_COUNT_DESKTOP;
    }

    /**
     * Calculate canvas width based on viewport width.
     * Responsive sizing: 50% on large screens, 60% on medium, 90% on small.
     */
    private getWidth(): number {
        const width = window.innerWidth;
        if (width > BUTTERFLY_CONFIG.BREAKPOINT_LARGE)
            return width * BUTTERFLY_CONFIG.CANVAS_WIDTH_LARGE;
        if (width > BUTTERFLY_CONFIG.BREAKPOINT_MEDIUM)
            return width * BUTTERFLY_CONFIG.CANVAS_WIDTH_MEDIUM;
        return width * BUTTERFLY_CONFIG.CANVAS_WIDTH_SMALL;
    }

    /**
     * Calculate canvas height maintaining aspect ratio
     */
    private getHeight(): number {
        const width = this.getWidth();
        return width * BUTTERFLY_CONFIG.CANVAS_HEIGHT_RATIO;
    }

    /**
     * Calculate scaling factor for X coordinate mapping
     */
    private getWidthScaler(canvasWidth: number): number {
        return BUTTERFLY_CONFIG.WIDTH_SCALE_FACTOR * canvasWidth;
    }

    /**
     * Calculate scaling factor for Z coordinate mapping
     */
    private getHeightScaler(canvasHeight: number): number {
        return BUTTERFLY_CONFIG.HEIGHT_SCALE_FACTOR * canvasHeight;
    }

    /**
     * Initialize particle system with random positions and colors
     */
    private initialize(): void {
        const nParticles = this.getNumberOfParticles();
        this.particles = [];
        this.colors = [];

        for (let i = 0; i < nParticles; i++) {
            const p = new ButterflyAnimation(0, 0, 0);
            p.randomize();
            this.particles.push(p);
            this.colors.push(
                `rgb(${rand(BUTTERFLY_CONFIG.COLOR_R_MIN, BUTTERFLY_CONFIG.COLOR_R_MAX)}, ${rand(BUTTERFLY_CONFIG.COLOR_G_MIN, BUTTERFLY_CONFIG.COLOR_G_MAX)}, ${rand(BUTTERFLY_CONFIG.COLOR_B_MIN, BUTTERFLY_CONFIG.COLOR_B_MAX)})`,
            );
        }

        const canvasWidth = this.canvas.width;
        const canvasHeight = this.canvas.height;
        this.ctx.fillStyle = this.isDark ? BUTTERFLY_CONFIG.BG_DARK : BUTTERFLY_CONFIG.BG_LIGHT;
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    /**
     * Initialize canvas and start animation
     */
    private init(): void {
        const canvasWidth = this.getWidth();
        const canvasHeight = this.getHeight();

        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.alpha = BUTTERFLY_CONFIG.ALPHA_INITIAL;

        this.initialize();
        this.animate();
    }

    /**
     * Main animation loop - updates and renders all particles
     */
    private animate(): void {
        const nParticles = this.getNumberOfParticles();
        const widthScaler = this.getWidthScaler(this.canvas.width);
        const heightScaler = this.getHeightScaler(this.canvas.height);

        const draw = () => {
            if (this.alpha > BUTTERFLY_CONFIG.ALPHA_MIN)
                this.alpha -= BUTTERFLY_CONFIG.ALPHA_DECREMENT;

            this.ctx.fillStyle = this.isDark
                ? `rgba(40, 44, 52, ${this.alpha / 100})`
                : `rgba(255, 255, 255, ${this.alpha / 100})`;

            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.save();
            this.ctx.translate(this.canvas.width / 2, 0);

            for (let i = 0; i < nParticles; i++) {
                const particle = this.particles[i];
                if (!particle) continue;

                const color = this.colors[i];
                if (!color) continue;

                const oldP = particle.copy();
                particle.update();
                const newP = particle.copy();

                this.ctx.strokeStyle = color;
                this.ctx.lineWidth = BUTTERFLY_CONFIG.LINE_WIDTH;
                this.ctx.beginPath();
                this.ctx.moveTo(oldP.x * widthScaler, this.canvas.height - oldP.z * heightScaler);
                this.ctx.lineTo(newP.x * widthScaler, this.canvas.height - newP.z * heightScaler);
                this.ctx.stroke();
            }

            this.ctx.restore();
            this.animationId = requestAnimationFrame(draw);
        };

        draw();
    }

    /**
     * Reset animation by reinitializing particles (triggered by canvas click)
     */
    reset(): void {
        this.alpha = BUTTERFLY_CONFIG.ALPHA_INITIAL;
        this.initialize();
    }

    /**
     * Update background colors when theme changes
     */
    updateTheme(): void {
        this.isDark = document.documentElement.classList.contains('dark');
        this.reset();
    }

    /**
     * Set up event listeners for user interaction and theme changes
     */
    private setupEventListeners(): void {
        this.canvas.addEventListener('click', () => this.reset());
        window.addEventListener('themechange', () => this.updateTheme());
    }

    /**
     * Clean up animation frame on component destruction
     */
    destroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}
