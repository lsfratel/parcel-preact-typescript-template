declare module '*.svg' {
	const src: string;
	export default src;
}

declare module '*.module.css' {
	const classes: Record<string, string>;
	export = classes;
}

declare module '*.module.scss' {
	const classes: Record<string, string>;
	export = classes;
}
