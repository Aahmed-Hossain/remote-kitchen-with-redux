import { useAppSelector } from "@/redux/hook";
import FoodsCard from "./FoodsCard";

const Foods = () => {
  const foods = useAppSelector((state) => state.foodItems);
  console.log(foods);
  return (
    <div className="my-4">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
     {foods.map((food) => (
        <FoodsCard key={food.id} food={food} />
      ))}
     </div>
    </div>
  );
};
export default Foods;
