/* eslint-disable import/no-default-export */
declare module '*.svg' {

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src 
}

declare module '*.png' {
  const value: any
  export default value
}
