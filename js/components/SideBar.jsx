import React from 'react'

export default class SideBar extends React.Component{
    render(){
        return(
            <div className="tniSidebar">
                            <div className="tniMyself">
                                <img
                                    className="active profile"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAABCFBMVEX/wgD/////6L5ncHmKXEL53KTexJL/wAD/xQD/vgDr6urd3t//6r/h4uJkbnjCxMdcZnB1fYW5vL+HWUNBR1P/+OWDVkT/6Lj/0VT/xhn//fT/4Jz/2HP/zDb/6LP/3IP/zEr/5aZebHz/9Nf/34//ximCUjjy2rKHhoBOVWB+UUaNXj/TtZGYblKDiI3/8s6ZaTvaoxntsg67hy7LlSL/02DFjyiheVy4lXXkyKLDooHYnyStiGp5RCzRvpigl4SYnJ9vdHKrejWjczd2SUmvfCvvyXzltVHGpnvjsh/MpjankU7l1LPBoECXh1+oo5eOhWh6em3IvKO6nE3brS64qo6ai1bkxGgasqO5AAAKhElEQVR4nLWbCVvbPBLHnTg+Ql3HJCTkPlxICCEH4QhXIcCyW17K9VLY7/9NdiQfsWVdzu7O87QNVBn9/J/RSJZlJbOW1X9Y241mtVWrKWC1WqvabGxbP+rreVPS9z9td7q7ipLPG0rEjHxeUXa7nfY0PUlKiHK72a2h7liWz9e6zXb5/wdR7lXN+OXTzcib1V4aDmmIulWV6D9CUrWk4yIJUe51jVQMQGF0ZeWQgijv7HLSgG353R0pDAmIcqfGE8EEU4w5Q45aRwJDCFHv1TgAijI/PL2bzWYMCITRE+aGCGLaZQfCVOan96X9Sqkym5ts0nx3+l9BlJvsIWkal/cAkMvlSlwGNGSb/JhwIdotNoJyPCshArD9x4DBxEbBaLXXheiwL858vA8QcqU7E3cP+TE/BJsbCoWksxZEucXMBlM5qgQIAAHBmB8f3Y/2A8vdHx3mCY58ix0SJkSbNi5NPAjMw1klt2KYHR7NSpUIFfyuUsndXdZiGEaNGRIWRIOqwOUlUv5yFO0wN8rFAEKQ0uyY+H4jHUSHlpHm8cxAf1P7TFhlf3ZMBNRgJAYVol6lpYN5/I9jEOJoXwphdDRPZme+Si1cNIg6db40LyulQ5SSEgglKgLSgkpBgaifUHWYj0qjuSnH8DCn1wvQ4oRCkYSgx0JRZqXcaH4sFYvRw9Hp5eGcykGLSBKCvnYxTyEbR6cyCEgKZLnR3fFcSXAYVTFEh6oDBAM7l4QIWCqjh8MERj4xRkiIBn22kMsFilVK94nZzSDrBQHRpiLArDBajwHJUTpNXFibB1FmLGDM0zWFwBSzR1KLWpkDwZy6RymzIWKVU0pyttgQ9KREM9b6DKVjWr2IJ2cUgpUQkJZrQ1QeGD7bdIhyiwkxWxtixFr5RZcXEYgmKyHMOZWh3++jf8aLxXgc/kRY6Y51YUaTBjFlrycvE2MDOlycXRycD7LZrGXBX4Pzg4urcY4EgaxkWX6ahKh32Xc4RKXq58ZnBwPUO/SPCLL+58H5xSLOwYEwuvUERI9zo3cfDUf/59U56jNLMQRyFo1L5YjtNd8jIVhlClm0XPbHF1k6QMhhHYxDjNKMcwcZlqwAgrqe88yMQpwNeAQ+R/YibM8cHcg6cQieENFSdcBVYYVxHohRuuRABFL4EDsc1SKD41wKAYsxDjKTA2HsRCHKu+yWaHnt58OBLANQDMaCQoFstxyB4A2N1RQ6lmcAioO+l5k8CH+AKF6N4LUMFzQXaSCy2YWfmTzfXq3AEBZ/OyqAkM4IT4oLLze52waGFUII9uV8iH5KiHMvHodciGoAURbsywVKpMhLWQjFKPsQPT5DmBNX6SC8zKzwCgVYz4eoCiDCBaZEtYxAnElBVD2IMp9hvToBk7tXKEQQZhlDtAUbpZGKmUIKPxpCiHwbQzBXVAHEYTiFXqVQwq/bOX5i4hWWIqhUCGI+CygWqYUQFCsF1yslM+VMoD5suKhJAXEVzOWiffnaFCBEKREZoyky01r4syh3AkMGSaEw73giEI++EmfSQoRKcNcTHkQHILoiBrCHUtoJzDr3GNg776F1M0qdt5QImv0Tz+TyCNlg/qr8SyQELCrqyg8xQ1PTrvpp5y9vKv+l7QjzHhAsYZsTTdN0uNcYpGNAUizgq5wltG+Wsi3Ky3wPPGnjVIUKQ5z3+7/gm9siKfLbSkMEYW4jiEU/5boKVpn9nI6+eiKCaCiiou1D/PqZNiUAYqzJQBhNRTCPg2FP+s9U8ziGyF3hr3ZFEFWFuSkRWL6DIcZrQJxhCOFVthTxCOpiV4uUgwMgSigvNWG8lV0JCHMH+bpIDzHCeSkuhmIEsBaWIiUDLK28sZHy6TbTumtBZHEwxGVb1qqo6KRlQEO7+T9DQFs7jbUgRCUiMKmsAGs20kL0OpK+a9IQSq2XjqEh7XlXXKwCM06maRim8gdPWhJlOwROlRVtaSEAQVzQQttJwWBdP8q6hQlMOJWvrJUGYqL+JVkiYCoXLmoCM82n3/Ir/t+O7T7LUcCiRry88xmMF/dVXohXR5WmsGQWutiMN9dWZaWwfqtgtv1HiuKH1JIfMXy5quq8ykKAEIhClXEOS/5MV4bB/HCxUzkprN+2is19k/DdlboNBIY/nld7Tw5iz4dQXfEQwbeB4htigHj3vTp/S1BYfzs+g2q/CWsWviEWbw34wcBOb8VLTcjKQAiQQjhC8NaAcJME7Db0CrkppHhdMYAUIt94k0S4XaSYf7kRr8KADPYiEKpomHrbReKkMF+iEIIRYg30GIT7JbVxJtpCVOa3sUtTs1wKPQ6h2lJbiMLN1D9qzNxrPgMB4fITvyq5rfzsEhA6E2FbT0JwS4XRk9tgXw3QEIJBYSEdEhAfXIiy5KOGJxJC03Xq/dhAp0E88Z6CnUg+dDGSEHQKXadD8HyvHroI6hUVgsCwAhnAbuWViDx+EjyII3LC+dQ8Cn3gPa1Hf1YI+nWsNTcnog/iBI8kidFh32gBBQIZDDQ9Zjd2HIIzOmKPJPkPZ4k6oW5qUYqEvRMQbM/xh7Pcx9TKnHCrXvMorgmGN7YQxGNq3nlcRXmJ+7U/NY2N8Uk05kxgxAN7jhSm+XFL+L3VNCaGpsZnjnf6acSoEMJDHGbtw3WJaKykSGBovU+XaOs+J89ZYUse4qAfZzFrz++EU890TUty4M9qgth9o0aEdpyFdrDHfHxLqOA5vtEYtkdp76pPFDFoB3uSKyxIBpUqA/L72aMh9G7ozO5b4vgd/YgTedjLfHyny4Dd2tc0CDIhVu3VDwKCcdiLOPb2nIhu3CgUTAYkxlf8LDnj2FvsAKD5xJbBvzadZLixeV9xX6IJwTwAGD0K+ZW8KCf+I0Qklhf6LTHPEe2j94S8o5CrkvVBEdYekhTRMfJJRM8hWiOKrwCCeyjUT4vYjcbKhiSFuxeERN8jouds0cbqMyUhkhAZvHu0y8hJkgKaITF6eiIbnC0yGF5zPFJFB4VxcppfjARzthIU9t61fqMmGZLBwFK8mDJHptFdyJyZ5eDc3yMIm8AHO/yd/8shgwHPqTKHxzP1Ki0rQwqss10sTELQEMf/pc1mUO0XReoYfab+SovnigL18H2jQDayN79tFJ2QkwHh/FvqhQKwpYDCYUOADBwG1VnS+qO/6SKg2BqyIABhyCmbdAbW6zZFXgEeUiFUBIFU4jAU6b2xXjwq8qYvByBQf9EmjuMgJTjfslUGA/sVrMImTwwEAcoPhw42+AA/eYnJZNgssPpiv4y2MXFYGDZKzC3ChioPwnYmG8yueK/lLVkhsb3RgRTw+h+iMGxyIGyVnpJiCAgJ3am9GqK2HRRKmwPBCYUQIrOxpIbE5hUrSnNnyQ6FGCKT+Tah+E0H4Uy+CToRv0MMMUncSshD2I7KjYQkRGajqBIY0hCAUORHQhYCrBhXQxLCdjZZ5WkdiMxGIVo1pCCgMhQkVEgBAfZtGUZFDGE79lKUjutAgBWAA4HwIWxY7C/F2bguBArLcoLuKJgQ8H+TpWwY1oRA9r1QnAAETKLhohJ9ctDcMSkWvqf3uAaEZxuF4nI52bzdBIbbzclyWfyW8vpX9h9xkj72Wchk+AAAAABJRU5ErkJggg=="
                                    height="128px"
                                    width="128px"
                                    alt="Active player"
                                />
                                <div
                                    style={{
                                    position: "absolute",
                                    top: "-27px",
                                    transform: "rotate(-31deg)",
                                    padding: "20px 0px 0px 20px"
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={130}
                                        height={130}
                                        viewBox="0 0 128 128"
                                        aria-label="Edition Icon"
                                    >
                                        <g className="crown govtEdition">
                                        <path
                                            d="M53.552,45.763c-8.209,3.377-16.808,4.211-25.582,3.791c-1.925-0.093-3.843-0.297-5.811-0.453   c-0.002,0.017-0.006,0.032-0.009,0.049c-3.949-0.561-7.842-1.534-11.656-3.058c-1.042-0.416-2.059-0.88-3.036-1.406l0.986,8.88   c0.194,0.122,0.392,0.242,0.595,0.36c0,0.001,0.001,0.001,0.002,0.001c8.095,2.826,16.527,3.576,25.114,3.288   c1.01-0.034,2.019-0.103,3.028-0.189c6.007-0.326,11.904-1.319,17.623-3.346c0.271-0.158,0.534-0.32,0.79-0.486l0.986-8.874   C55.608,44.859,54.593,45.334,53.552,45.763z M16.331,52.255c-0.333,1.14-1.528,1.794-2.668,1.461   c-1.14-0.333-1.794-1.528-1.461-2.668c0.333-1.14,1.528-1.794,2.668-1.461C16.01,49.92,16.664,51.115,16.331,52.255z    M32.003,55.832c-1.188,0.001-2.152-0.96-2.153-2.148c-0.001-1.188,0.96-2.152,2.148-2.153c1.188-0.001,2.152,0.96,2.153,2.148   C34.152,54.866,33.191,55.83,32.003,55.832z M50.305,53.36c-1.145,0.316-2.329-0.357-2.645-1.502   c-0.316-1.145,0.357-2.329,1.502-2.645c1.145-0.316,2.329,0.357,2.645,1.502C52.123,51.86,51.451,53.044,50.305,53.36z"
                                            fill="#ffffff"
                                        />
                                        <ellipse
                                            cx="13.256"
                                            cy="31.442"
                                            rx="2.007"
                                            ry="2.636"
                                            fill="#ffffff"
                                            transform="matrix(0.9435 -0.3314 0.3314 0.9435 -9.6694 6.1688)"
                                        />
                                        <ellipse cx="32" cy="31.442" rx="3.209" ry="4.214" fill="#ffffff" />
                                        <ellipse
                                            cx="50.744"
                                            cy="31.442"
                                            rx="2.636"
                                            ry="2.007"
                                            fill="#ffffff"
                                            transform="matrix(0.3314 -0.9435 0.9435 0.3314 4.2641 68.9005)"
                                        />
                                        <path d="M57.688,6.728c-3.021,0-5.479,2.458-5.479,5.479c0,1.697,0.776,3.217,1.991,4.222l-9.296,7.976   l-9.402-7.983c1.208-1.004,1.975-2.518,1.975-4.216c0-3.032-2.447-5.479-5.479-5.479s-5.479,2.447-5.479,5.479   c0,1.698,0.768,3.212,1.975,4.216l-9.402,7.983l-9.296-7.976c1.216-1.006,1.991-2.525,1.991-4.222c0-3.021-2.458-5.479-5.479-5.479   s-5.479,2.458-5.479,5.479c0,2.436,1.599,4.505,3.802,5.215l0.495,4.455l0.48,4.319l1.734,15.605   c1.192,0.75,2.537,1.424,4.054,2.03c3.255,1.3,6.639,2.216,10.322,2.793l0.632,0.05c0.631,0.05,1.256,0.105,1.878,0.16   c1.332,0.117,2.59,0.227,3.856,0.288c9.632,0.462,17.43-0.686,24.54-3.611c1.528-0.629,2.879-1.324,4.073-2.097L58.4,26.106   l0.497-4.474l0.468-4.211c2.203-0.71,3.802-2.779,3.802-5.215C63.167,9.185,60.709,6.728,57.688,6.728z M14.686,35.512   c-1.712,0.601-3.739-0.734-4.529-2.982c-0.789-2.248-0.042-4.558,1.67-5.159c1.712-0.601,3.739,0.734,4.529,2.982   C17.145,32.601,16.398,34.911,14.686,35.512z M32,38.077c-2.79,0-5.052-2.971-5.052-6.635S29.21,24.807,32,24.807   s5.052,2.971,5.052,6.635S34.79,38.077,32,38.077z M53.843,32.53c-0.789,2.248-2.817,3.583-4.529,2.982   c-1.712-0.601-2.459-2.911-1.67-5.159c0.789-2.248,2.817-3.583,4.529-2.982C53.885,27.973,54.632,30.282,53.843,32.53z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="tniAutoReload">
                                    {/* <AutorenewIcon /> */}
                                </div>
                                <h2>Lee</h2>
                            </div>
                            <ul className="tniPlayers">
                                <li>
                                    <div style={{ position: "relative" }}>
                                        <img
                                            class="player"
                                            src="data:image/png;base64,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"
                                            alt="player"
                                        />
                                    </div>
                                    <div className="tniScore">
                                        <h4>Gisselle</h4>
                                        <div className="tniScoreCount">7</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
        )
    }
}