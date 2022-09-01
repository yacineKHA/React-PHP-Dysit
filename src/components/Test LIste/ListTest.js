import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";


const ListTest = ()=>{

    const[todoList, setTodoList] = useState(['Yaya', 'yoyo', 'coucou', 'lala', "Huhu"]);
    const [catList, setCatList] = useState([]);
    const [newValue, setValue] = useState('');

    useEffect(() => {

        console.log('re-render vf'+ catList)
        console.log(newValue)
    }, []);

    const addCats =(...args)=>{
        const newList = [args];
        setCatList(newList);
    }

    function valueOnChange(e) {
        setValue(e.target.value)
    }

    const addItem = ()=>{
        if (newValue !== '' && newValue !== undefined){
            const newList = [...todoList];
            newList.push(newValue)
            setTodoList(newList);
            console.log(newValue);
            setValue('');
        }
    }

    const deleteItem = (x)=>{
        const newList = [...todoList];
        newList.splice(x.key, 1)
        setTodoList(newList);
        console.log(x.key)
    }

    const content = todoList.map((x, key) =>{
                return(
                    <ul >
                        <li key={key} style={listClass}>
                            <p  style={{color:"white"}}>{x}</p>
                            <Button onClick={() => deleteItem({key})}>Supprimer</Button>
                        </li>
                    </ul>
                )
            }
        )


    return(
        <div style={{display: 'flex', flexDirection:"column", justifyContent:'center', alignItems:'center', marginTop:'50px'}}>
            <div>
                <input onChange={valueOnChange} value={newValue} placeholder='ajouter un texte'/>
                <Button onClick={addItem} style={{backgroundColor:'white'}}>Ajouter</Button>
            </div>
            {content}
        </div>
    )

}

export default ListTest;

const listClass = {
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'15px'
}