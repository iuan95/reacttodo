function InputItems({methodAdd, methodHundleAdd, valueText}){

        return(
        <div>
            <form>
                <input value={valueText} onChange={methodAdd} name={"name"} placeholder={"Сообщение"}/>
                <button className={"btn"} onClick={methodHundleAdd}>Отправить</button>
            </form>
        </div>
    )
}
export default InputItems;