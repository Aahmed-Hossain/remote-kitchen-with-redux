import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { Box, TextField } from "@mui/material";
import { updateFood } from "@/redux/foodReducers";
import { toast } from "react-toastify";

interface UpdateModalProps {
      closeUpdateModal: () => void;
currentFoodItem: FoodItem | null; 
}

interface FoodItem {
  id?: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ closeUpdateModal,currentFoodItem }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FoodItem>({
    defaultValues: currentFoodItem || {} as FoodItem 
  });
  const dispatch=useAppDispatch()

React.useEffect(() => {
    if (currentFoodItem) {
      reset(currentFoodItem);
    }
  }, [currentFoodItem, reset]);

// to solve ts warnings
  if (!currentFoodItem) return null; 

  const onSubmit: SubmitHandler<FoodItem> = (data) => {

// console.log(data)

dispatch(updateFood(data))
toast.success(`Updated the: ${currentFoodItem.name}`)
closeUpdateModal();
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-white rounded-md shadow-lg px-6 md:px-16  py-4 md:py-6 w-[20rem] md:w-[28rem]">
        <h3 className="font-bold text-lg mb-4">Update The {currentFoodItem.name}</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
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
              rows={3}
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
              
              })}
              id="outlined-price-input"
              label="Food Price"
              type="number"
              inputProps={{ step: "0.01" }}
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
              label="Food Image"
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
              onClick={closeUpdateModal}
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

export default UpdateModal;
