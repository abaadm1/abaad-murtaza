declare module 'vanta' {
  export interface VantaEffect {
    destroy(): void;
  }
  
  export const NET: (options: any) => VantaEffect;
  
  export default { NET };
}
