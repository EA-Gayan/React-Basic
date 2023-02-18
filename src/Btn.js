// Handling events using separate function declarations
// function App() {
//         function thirdExample() {
//             console.log('third example');
//         };
//         return (
//             <div className="thirdExample">
//                 <button onClick={thirdExample}>
//                     using a separate function declaration
//                 </button>
//             </div>
//         );
//     };




function Btn(){
    const clickHandler = 
        ()=>console.log('clicked')
    return(
        <div>
            <button onClick={clickHandler}>
                Click me
            </button>
        </div>
    )
}

export default Btn;