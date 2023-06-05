import { TextField } from '@mui/material'
import { Stack } from '@mui/joy';
import dividerLogo from "../assets/images/icon-arrow.svg"
import { useState } from 'react';

const InputHeader = ({ setAge }) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    console.log(day)

    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        const timeDiff = Math.abs(today.getTime() - birthDate.getTime());
        const calculatedYear = Math.floor(timeDiff / (1000 * 3600 * 24 * 365));
        const calculatedMonth = Math.floor((timeDiff % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30.44));
        const calculatedDay = Math.floor((timeDiff % (1000 * 3600 * 24 * 30.44)) / (1000 * 3600 * 24));

        setAge({ calculatedYear, calculatedMonth, calculatedDay });
    };



    return (
        <div >
            <Stack >
                <Stack direction="row" spacing={2} >
                    <div className=''>
                        <div className='mb-2 font-bold'>DAY</div>
                        <TextField className='xxx md:!w-[200px] !w-[100px]' value={day} onChange={(e) => setDay(e.target.value)} error={!day}
                            placeholder='DD'
                            helperText={!day && "This field is required"}
                            sx={{ "& .MuiFormHelperText-root": { fontStyle: 'italic' } }} type='number'
                            inputProps={{ min: 1, max: 31 }}
                            aria-label="dayInput"
                        />
                    </div>
                    <div className=''>
                        <div className='mb-2 font-bold'>MONTH</div>
                        <TextField className='md:!w-[200px] !w-[100px]' value={month} onChange={(e) => setMonth(e.target.value)} error={!month} placeholder="MM" helperText={!month && "This field is required"}
                            sx={{ "& .MuiFormHelperText-root": { fontStyle: 'italic' } }} type='number'
                            inputProps={{ min: 0, max: 12 }}
                            aria-label="monthInput"
                        />
                    </div>
                    <div className=''>
                        <div className='mb-2 font-bold'>YEAR</div>
                        <TextField className='md:!w-[200px] !w-[100px]' value={year} onChange={(e) => setYear(e.target.value)} error={!year} placeholder="YYYY" helperText={!year && "This field is required"}
                            sx={{ "& .MuiFormHelperText-root": { fontStyle: 'italic' } }}
                            type='number'
                            inputProps={{ min: 1900, max: 2023 }}
                            aria-label="YearInput"
                        />
                    </div>
                </Stack>
            </Stack>

            <div className="flex items-center gap-3 my-3">
                <hr className="flex-grow" />
                <div className="h-20 w-20 bg-[#864CFF] rounded-full">
                    <button onClick={calculateAge} className="h-full w-full flex items-center justify-center">
                        <img src={dividerLogo} alt="Logo" />
                    </button>
                </div>
                <hr className="lg:hidden block flex-grow" />
            </div>

        </div>
    )
}

export default InputHeader