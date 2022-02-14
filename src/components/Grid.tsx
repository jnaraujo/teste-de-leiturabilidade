import styled from "styled-components";
import cx from "classnames";


const Container = styled.div`
    display: flex;
`

const ItemDefaultValues = {
    GridsWidth: {
        xs: 0,
        sm: 540,
        md: 720,
        lg: 992,
        xl: 1200,
    }
}

type ItemPropTypes = {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
}

const Item = styled.div<ItemPropTypes>`
    
    width: ${props=> props.xs ? props.xs / 12 * 100 : "100"}%;

    @media screen and (min-width: ${ItemDefaultValues.GridsWidth.sm}px) {
        .sm{
            width: ${props=> props.sm / 12 * 100}%;
        }
    }
    @media screen and (min-width: ${ItemDefaultValues.GridsWidth.md}px) {
        .md{
            width: ${props=> props.md / 12 * 100}%;
        }
    }
    @media screen and (min-width: ${ItemDefaultValues.GridsWidth.lg}px) {
        .lg{
            width: ${props=> props.lg / 12 * 100}%;
        }
    }
    @media screen and (min-width: ${ItemDefaultValues.GridsWidth.xl}px) {
        .xl{
            width: ${props=> props.xl / 12 * 100}%;
        }
    }
`

export default function Grid(props: {
    children: React.ReactNode,
    grid?: number,
    className?: string,
    item?: boolean,
    container?: boolean,

    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
} ) {
    if(props.item){
        return (
            <Item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl} className={props.className + " " + cx({
                "xs": props.xs,
                "sm": props.sm,
                "md": props.md,
                "lg": props.lg,
                "xl": props.xl,
            })}>
                {props.children}
            </Item>)
    }else if(props.container){
        return (
            <Container className={props.className}>
                {props.children}
            </Container>
        )
    }
}