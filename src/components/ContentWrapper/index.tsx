import styled from "styled-components";

type CardProps = {
    children: React.ReactNode;
    height: number;
}


export function ContentWrapper(props: CardProps) {

    const CardStyled = styled.div`

        padding: 2px;
        color: #d7dae2;

        .card {
            padding: 0px 8px;
            margin-top: 0px;
            min-height: ${(188 * props.height) + ((props.height - 1) * 28)}px;
            border: none;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0);
            /* border: 1px solid #ffffff1e; */
            
            .card-header {
                display: flex;
                justify-content: space-between;
                background: none;
                border: none;

                h4 {
                    margin-top: -2px;
                    margin-left: -8px;
                    font-size: 18px;
                    color: #b9bdc7;
                }

                span {
                    color: #949aa9;
                    font-size: 12px;
                    margin-right: -8px;
                }
            }
    
    
            .card-body {
                height: 100%;
                /* background-color: rgba(150, 156, 166, 0.35); */
            }

            .overflow-x {
                overflow-x: auto;
            }
    
        }

        .chart_div {
            margin: -20px;
            margin-left: -40px;
            margin-top: -50px;
            margin-bottom: -30px;
        }

        @media screen and (max-width: 800px) {
            div.card {
                margin: 8px -14px;
            }
        }

        @media screen and (min-width: 1400px) {
            padding: 2px;
            color: #d7dae2;

            .card {
                padding: 0px 8px;
                .card-header {

                    h4 {
                        margin-top: -2px;
                        margin-left: -8px;
                        font-size: 20px;
                        color: #b9bdc7;
                    }

                    span {
                        color: #949aa9;
                        font-size: 14px;
                        margin-right: -8px;
                    }
                }
        
        
                .card-body {
                    height: 100%;
                    /* background-color: rgba(150, 156, 166, 0.35); */
                }

        
            }

            .chart_div {
                margin: -20px;
                margin-left: -40px;
                margin-top: -50px;
                margin-bottom: -30px;
            }
        }


    `;


    return (
        <CardStyled>
            <div className="card">
                {props.children}
            </div>
        </CardStyled>
    );
}