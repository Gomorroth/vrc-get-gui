export type Props = {
    name: string,
    className? : string,
    width? : number,
    height? : number,
};

export default function SVGIcon(props : Props)
{
    return (
        <img 
            src={`/icons/${props.name}.svg`} 
            className={props.className}
            width={props.width}
            height={props.height}
            />
    )
}