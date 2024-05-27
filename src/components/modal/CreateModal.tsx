import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { addFood } from "@/redux/foodReducers";

interface FoodItem {
  name: string;
  description: string;
  price: number;
  image: string;
}
interface CreateModalProps {
  closeCreateModal: () => void;
}
const CreateModal = ({ closeCreateModal }: CreateModalProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodItem>();

  const onSubmit: SubmitHandler<FoodItem> = (data) => {
    console.log(data);
    dispatch(addFood(data));
    closeCreateModal();
  };
  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-lg px-6 md:px-16  py-4 md:py-6">
        <h3 className="font-bold text-lg">Create a New Food Item</h3>
        <p className="py-4">Fill out the form to add a new food item.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Box>
            <TextField
              sx={{ width: "100%" }}
              {...register("name", { required: "Name is required" })}
              id="outlined-name-input"
              label="Food Title"
              type="text"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </Box>

          <Box>
            <TextField
              sx={{ width: "100%" }}
              {...register("description", {
                required: "Description is required",
              })}
              id="outlined-description-input"
              label="Food Description"
              type="text"
              multiline
              rows={2}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </Box>

          <Box>
            <TextField
              sx={{ width: "100%" }}
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              id="outlined-name-input"
              label="Food Price"
              type="number"
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%" }}
              {...register("image", { required: "Image URL is required" })}
              id="outlined-name-input"
              label="Food Title"
              type="text"
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}
          </Box>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-2 py-1 rounded-md bg-red-200"
              onClick={closeCreateModal}
            >
              Close
            </button>
            <button
              type="submit"
              className=" px-2 py-1 rounded-md bg-green-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
