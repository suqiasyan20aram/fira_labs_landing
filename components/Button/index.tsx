import React from 'react';
import Image from "next/image";
import classNames from 'classnames';

import styles from './index.module.scss';
import arrowIcon from '../../assets/images/arrowRight.svg';


export type AppButtonSize = 'small' | 'default';
export type AppButtonType = 'button' | 'submit' | 'reset';
export type AppButtonVariant = 'primary' | 'primary-outline' | 'red' | 'red-outline' | 'link';

type ButtonProps = {
    id?: string;
    text?: string;
    type?: AppButtonType;
    disable?: boolean;
    size?: AppButtonSize;
    variant?: AppButtonVariant;
    onClick?: () => void;
    className?: string;
};

const Button = ({
                    id,
                    text,
                    type = 'button',
                    disable,
                    size = 'default',
                    variant = 'primary',
                    onClick,
                    className,
                }: ButtonProps) => {
    const buttonClassName = classNames(
        styles.button,
        styles[size],
        styles[variant],
        {
            [styles.disabled]: disable,
        },
        className,
    );

    return (
        <button
            id={id}
            type={type}
            className={buttonClassName}
            disabled={disable}
            onClick={onClick}
            data-testid={'button'}
        >
            {!!text && <span className={styles.text}>{text}</span>}
            <span className={styles.arrow}>
                <Image src={arrowIcon} alt={''} width={24} height={24}/>
            </span>
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    size: 'default',
    variant: 'primary',
} as ButtonProps;

export default Button;
