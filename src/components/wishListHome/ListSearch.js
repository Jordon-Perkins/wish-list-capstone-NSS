// ProductSearch.js from KandyKorner


export const ListSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder=" Wish List are you looking for?" />
        </div>
    )
}