import React, {type PropsWithChildren} from "react";

type Props = PropsWithChildren

const Button: React.FC<Props> = ({children}) => {
    return (
        <div>
            <button type='button' style={{
                textDecoration: 'none',
                color: 'black',
                backgroundColor: 'inherit',
                padding: '3px 10px',
                border: '1px solid black',
                display: 'inline-flex',
                width: '70px',
                boxShadow: '4px 4px 0 -1px rgba(0, 0, 0, 0.87)',
                fontSize: '15px',
            }}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;