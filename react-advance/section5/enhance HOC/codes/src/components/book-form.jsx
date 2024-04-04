import  {includeUpdatableResouce} from "./include-updatable-resouce"
const BookForm =includeUpdatableResouce(({book,onChangeBook, onSaveBook, onResetBook})=>{
 const {name, pages ,title}=book||{};
    return book ? (
        <>
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => onChangeBook({ name: e.target.value })}
            />
          </label>
          <label>
            page:
            <input
              value={pages}
              onChange={(e) => onChangeBook({ pages: Number(e.target.value) })}
            />
          </label>
          <label>
            title:
            <input
              value={title}
              onChange={(e) => onChangeBook({ title:e.target.value })}
            />
          </label>
          <button onClick={onResetBook}>Reset</button>
          <button onClick={onSaveBook}>Save</button>
        </>
      ) : (
        <h3>Loading...</h3>
      );
}
,"/books/2","book");


export default BookForm;