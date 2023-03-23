import {useState} from "react";

function ShowItems({dataData, dataDel, hchandge}){

    return(
        <>
            {dataData.map((i)=>
                <ViewAllData data={i} del={dataDel} hundleChange = {hchandge}/>
            )}
        </>
    )
}


function ViewAllData({data,del, hundleChange}){
    const [edit, setEdit] = useState(false)
    return(
        <div>
            <ul className={"ul-ul"} key={data.id}>
                <li>Айди: <span className={'message'}> {data.id}</span></li>
                {edit? <>
                        <form className={'message'} >
                            <label>Сообщение:
                                <input defaultValue={data.message} onChange={e=>hundleChange(
                                    {...data, message: e.target.value }
                                )}></input>
                            </label>
                        </form>
                        <button className={"btn"} onClick={() => setEdit(false)}><span>Сохранить</span></button>
                    </>:
                    <>
                        <li>Сообщение: <span className={'message'}>{data.message}</span></li>
                        <div className={"btns"}>
                            <button className={"btn"} onClick={() => del(data)}><span>Удалить</span></button>
                            <button className={"btn"} onClick={() => setEdit(true)}><span>Редактировать</span></button>
                        </div>
                    </>
                }
            </ul>
        </div>
        )
}
export default ShowItems;