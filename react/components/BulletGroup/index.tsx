import React, { PropsWithChildren } from "react";
import { useListContext } from "vtex.list-context"
import { BulletsSchema } from "./BulletTypes";
import { useDevice } from "vtex.device-detector"
import { getBulletsAsTSXlist } from "./modules/bulletsAsList";

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || []

    // console.log(list)
    console.log("bullets", bullets)

    const bulletsContent = getBulletsAsTSXlist(bullets);

    if (false) {
        console.log(children,list)
    }
    return ( isMobile ? <div>Estamos en Mobile</div> : <div>{bulletsContent}</div>)
} 

export default BulletGroup;