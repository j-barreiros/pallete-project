// Hooks
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddBtnIcon } from "../../assets/Icons";
// Context
import { PalleteContext } from "../../context/PalletesContext";
// Style
import StyledCreatePallete from "./StyledCreatePallete";

const CreatePallete = () => {
    const palletteContext = useContext(PalleteContext);
    const [newPallete, setNewPallete] = useState(palletteContext.palleteDefault)
    const navigator = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(newPallete.color1 != palletteContext.palleteDefault.color1) {
            palletteContext.addPallete(newPallete, (id:number) => navigator(`/pallete/${id}`));
            //navigator(`/pallete/${newPallete.id}`)
            return;
        }
        // Add alert for the user when pallete is equal default
        return;
    }


    return (
        <StyledCreatePallete>
            <h1 className='title'>Create Color Pallete</h1>
            <p className="info">Choose 4 colors and create a new pallete.</p>
            <form className='color-form' onSubmit={(event) => handleSubmit(event)}>
                <div className='color-box'>
                    <input className='color-input' type='color' value={newPallete.color1} onChange={(e) => setNewPallete({ ...newPallete, color1: e.target.value })} />
                    <input className='color-input' type='color' value={newPallete.color2} onChange={(e) => setNewPallete({ ...newPallete, color2: e.target.value })} />
                    <input className='color-input' type='color' value={newPallete.color3} onChange={(e) => setNewPallete({ ...newPallete, color3: e.target.value })} />
                    <input className='color-input' type='color' value={newPallete.color4} onChange={(e) => setNewPallete({ ...newPallete, color4: e.target.value })} />
                </div>
                <button className='add-btn'><AddBtnIcon /> Add Pallete</button>
            </form>
        </StyledCreatePallete>
    )
}

export default CreatePallete;