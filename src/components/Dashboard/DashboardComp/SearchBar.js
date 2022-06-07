import Search from '../../../assets/Search'
import classes from './SearchSection.module.css'

const SearchBar = () => {

    return (
        <div  className={`${classes['search-section']}`}>
            <div className={`${classes['search-icon']}`}>
                <Search/> 
            </div>
            <textarea id={'textArea'} placeholder={'Search something ...'} />
        </div>
    )
}
export default SearchBar