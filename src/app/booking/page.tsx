import LocationDateReserve from "@/components/DateReserve";
import { Select, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Bookings() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">New Reservation</div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-white">
          Enter Your Information
        </div>
        <div className="bg-slate-100 rounded-lg w-fit px-10 py-5 flex flex-col items-center gap-4 shadow-white">
          <TextField
            name="Name-Lastname"
            label="Name-Lastname"
            id="standard-basic"
            variant="standard"
            className="w-full"
          />
          <TextField
            name="Contact-Number"
            label="Contact-Number"
            id="standard-basic"
            variant="standard"
            className="w-full"
          />
          <LocationDateReserve />
          <Select
            variant="standard"
            name="location"
            id="location"
            className="h-[2em] w-[200px]"
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </div>
      </div>
      <button
        name="Book Venue"
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
      >
        Book Venue
      </button>
    </main>
  );
}
