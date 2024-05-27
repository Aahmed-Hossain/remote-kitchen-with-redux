import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useState } from 'react';
import UpdateModal from "../modal/UpdateModal";
import { deletefood } from "@/redux/foodReducers";
import { useAppDispatch } from "@/redux/hook";

interface Food{
        id?: number;
        name: string;
        description: string;
        price: number;
        image: string;
}
interface FoodsCardProps {
    food: Food;
  }
const FoodsCard: React.FC<FoodsCardProps> = ({food}) => {
    const {id, name, description, price, image} = food;
    
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentFoodItem, setCurrentFoodItem] = useState<Food | null>(null);
    const dispatch = useAppDispatch();

    const openUpdateModal = (foodItem:Food ) => {
      setCurrentFoodItem(foodItem);
      // console.log(foodItem)
      setShowUpdateModal(true);
    };
    const closeUpdateModal = () => {
      setCurrentFoodItem(null);
      setShowUpdateModal(false);
    };
    
    const handleDelete=(id: number | undefined)=>{
      dispatch(deletefood({id:id}))
    }

  return (
    <div>
        <Card sx={{ maxWidth: 800 }}>
      <CardActionArea className="group">
        <CardMedia
          className="transition-transform transform group-hover:scale-105"
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography marginTop={1} gutterBottom variant="h6" component="div">
            Price:$ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{direction: 'flex', justifyContent: 'center',marginBottom: '10px', gap:'5px'}}>
        <Button onClick={() => openUpdateModal(food)}variant="outlined" startIcon={<UpdateIcon/>} color="primary">
          Update
        </Button>

        {showUpdateModal && (
        <UpdateModal
        closeUpdateModal={closeUpdateModal}
        currentFoodItem={currentFoodItem}
      
        />
      )}

        <Button onClick={()=>handleDelete(id)}  variant="outlined" startIcon={<DeleteIcon />}  color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default FoodsCard