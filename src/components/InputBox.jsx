function InputBox({ lable, margin="0px" }) {
    return (
        <div style={{marginBottom: margin}} className={`bg-white flex rounded-xl p-4 w-full`}>
            <div className="w-1/2 flex flex-col justify-between">
                <p className="text-black/40 mb-2">{lable}</p>
                <input type="text" className="placeholder:text-black outline-0" placeholder="0" id="" />
            </div>
            <div className="w-1/2 text-right">
                <p className="text-black/40 mb-2">Currency Type</p>
                <select className="outline-0 bg-black/10 rounded-lg p-1 text-sm" name="fruits" id="fruit-select">
                    <option value="apple">urd</option>
                    <option value="banana">Banana</option>
                    <option value="cherry">Cherry</option>
                </select>
            </div>
        </div>
    );
}
export default InputBox;