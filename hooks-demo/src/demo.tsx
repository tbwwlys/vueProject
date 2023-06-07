import React, { useState, useEffect } from 'react';
// Function Component
// 内置的一批最重要的hooks 函数
interface userInfo {
    name: string;
    lastname: string;
}
// export const MyComponent :React.FC = () => {
//     const [userInfo, setUserInfo] = useState<userInfo>({
//         name: 'John',
//         lastname: 'Doe'
//     });
//     return (
//         <>
//             <h1>{ userInfo.lastname }</h1>
//             <h4>{ userInfo.name }</h4>
//             <input
//                 type="text"
//                 value={ userInfo.name }
//                 onChange={ (e) => setUserInfo({
//                     ...userInfo,
//                     lastname: e.target.value
//                 })}
//             >
//             <input
//                 type="text"
//                 value={ userInfo.lastname }
//                 onChange={ (e) => setUserInfo({
//                     ...userInfo,
//                     lastname: e.target.value
//                 })}
//             ></input>
            
            
//             </input>
//         </>
//     )

// }

// export const MyComponent :React.FC = () => {
//     const [username, setUserName ] = React.useState("")

//     // 生命周期
//     useEffect(() => {
//         console.log('挂载了...')
//         setTimeout(() => {
//             setUserName("John")
//         }, 6000)
//     }, [])

//     return (
//         <>
//             <h4>{ username }</h4>
//             <input type="text" value={ username }
//                 onChange={(e) => setUserName(e.target.value)}
//             />
//         </>

//     )
// }

export const MyChildComponent :React.FC = () => {
    useEffect(() => {
        console.log('子组件挂载了')
        return () => {
            console.log('unmount时执行')
        }
    }, [])

    return <h4>Hello from Child Component</h4>   
}

export const MyComponent :React.FC = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        console.log('------------')
    }, [visible])
    return (
        <>
            { visible && <MyChildComponent/>}

            <button onClick={() => setVisible(!visible)}>
                Toggle Child Component Visibility
            </button>
        
        </>
    )
}