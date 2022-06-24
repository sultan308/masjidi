import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import MasjdiApi from "../apis/MasjdiApi";
import { MasjidsContext } from "../context/MasjidsContext";
import { ReviewsContext } from "../context/ReviewsContext";



const AddReview = () => {

    const [firstName , setFirstName ] = useState("");
    const [lastName , setLasttName ] = useState("");
    const [rating , setRating ] = useState("-");
    const [review, setReview ] = useState("");

    const {addReview} = useContext(ReviewsContext);
    const {setSelectedMasjid} = useContext(MasjidsContext);

    
    const masjidId = useParams().id;

    const submitReview = async (e) =>
    {
        e.preventDefault();
        
        
        try
        {
            const response = await MasjdiApi.post(`/${masjidId}/reviews/`, {
                
                    firstName,
                    lastName,
                    review,
                    rating
                

            });


            addReview(response.data.data[0]);

            const masjid = await MasjdiApi.get(`/${masjidId}`);
            setSelectedMasjid(masjid.data.data);

            setFirstName("");
            setLasttName("");
            setRating("-");
            setReview("");
        }
        catch(err)
        {
            console.log(err);
        }
    }


    return (
        <div className="p-4 container" >
            <h6 className="display-5 text-light text-center mb-3">Add Review</h6>
            <form onSubmit={submitReview}>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="firstname " className="text-light mb-2">First name:</label>
                        <input type="text" value = {firstName} className="form-control mb-2" id="firstname" 
                               placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="lastname" className="text-light mb-2">Last name:</label>
                        <input type="text" className="form-control mb-2" id="lastname" placeholder="Last name"
                               value = {lastName} onChange = {(e) => setLasttName(e.target.value)} />
                    </div>

                    <div className="form-group col-1">
                        <label htmlFor="rating" className="text-light mb-2">Rating:</label>
                        <select type="text" className="form-select form-control mb-2" id="rating"
                                value= { rating } onChange = {(e)=> setRating(e.target.value)} > 
                            <option disabled >-</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>

                </div>
                <div className=" form-group  ">
                    <label htmlFor="review" className="text-light mb-2">Review:</label>
                    <textarea id="review" className="form-control mb-2" placeholder="Review"
                     value= { review } onChange = {(e)=> setReview(e.target.value)} ></textarea>                
                </div>
                <div className=" form-group  ">
                    <button type="submit" className="btn btn-success bi bi-plus-lg p-1 mb-4 mt-2 col-12"> Add</button>
                </div>
            </form>
        </div>
    );
} 

export default AddReview;