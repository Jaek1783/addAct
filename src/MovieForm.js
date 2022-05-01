import React ,{useState} from "react";

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    const [nextId, setNextId] = useState(0);
    const resetForm = () => {
      setNextId(nextId+1);
      setMovieTitle('');
      setMovieYear('');
    }
    const validataForm = ()=> {
        resetError();
        let validated = true;
        if(!movieTitle){
            setTitleError('영화제목을 넣어주세요');
            alert(titleError);
            validated = false;
        }
        if(!movieYear){
            setYearError('개봉연도를 넣어주세요');
            alert(yearError);
            validated = false;
        }
        return validated;
    }
    const resetError = ()=> {
        setTitleError('');
        setYearError('');
    };
    const onSubmit = (event)=>{
      event.preventDefault();
      if(validataForm()){
        addMovie({
            id:nextId,
            title:movieTitle,
            year:movieYear
          });
          resetError();
        }
        resetForm(); 
      };
 
    return (
          <form onSubmit={onSubmit}>
           <p> <input type="text" placeholder='영화제목'
            onChange={e => setMovieTitle(e.target.value)}
            value={movieTitle}/></p>
            <p><input type="number" placeholder='개봉년도'
            onChange={e => setMovieYear(e.target.value)}
            value={movieYear}/></p>
            <p><button type='submit'>영화추가</button></p>
          </form>
    );
};

export default MovieForm;