import React, { PropsWithChildren } from "react";
import { BulletsSchema } from "./BulletTypes";
import { useDevice } from "vtex.device-detector"

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    console.log(bullets)
    if (false) {
        children
    }
    return ( isMobile ? <div>Estamos en Mobile</div> : <div>Estamos en Desktop</div>)
} 

export default BulletGroup;