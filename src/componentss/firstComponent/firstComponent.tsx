import  { FC } from 'react';

interface IPropsFirstComponent {
    text: string;
    color: string;
    fontSize: number; // Adding fontSize to the props interface
}

export const FirstComponent: FC<IPropsFirstComponent> = ({
    text,
    color,
    fontSize,
}) => {
    return (
        <div style={{ color: `${color}`, fontSize: `${fontSize}rem` }}>
            <p>{text}</p>
        </div>
    );
};
