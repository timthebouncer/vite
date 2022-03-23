
const Dropdown=()=>{

    return(
        <div className={'dropdown-wrapper'}>
            {
                [{id:1,name:'sss'}].map(item=>{
                    return(
                        <div key={item.id}>
                            <div>{item.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )


}
export default Dropdown