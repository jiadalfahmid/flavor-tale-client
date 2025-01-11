import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const FoodSpecialties = () => {
  return (
    <section className="container bg-base-300 mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Flavor Tales' Specialties</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Image */}
        <div className="relative">
          <img
            src="https://anytimestaff.com.au/wp-content/uploads/2020/01/chefscook-3.png" 
            alt="Food Specialty"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Tabs & Description */}
        <div className="flex flex-col justify-between space-y-6">
          <Tabs>
            <TabList className="flex space-x-6 border-b border-base-content pb-4">
              <Tab className="text-lg font-semibold px-4 py-2 focus:outline-none hover:text-orange-500 focus:text-white focus:bg-gradient-to-r focus:from-red-500 focus:to-yellow-500">Main Course</Tab>
              <Tab className="text-lg font-semibold px-4 py-2 focus:outline-none hover:text-orange-500 focus:text-white focus:bg-gradient-to-r from-red-500 to-yellow-500">Appetizer</Tab>
              <Tab className="text-lg font-semibold px-4 py-2 focus:outline-none hover:text-orange-500 focus:text-white focus:bg-gradient-to-r from-red-500 to-yellow-500">Salad</Tab>
            </TabList>

            <TabPanel>
              <h3 className="text-xl font-semibold">Main Course</h3>
              <p className="text-base-content mt-2">
                Enjoy our delicious main courses like Grilled Steak, Roasted Chicken, and more. Each dish is prepared with fresh ingredients and seasoned to perfection.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="text-xl font-semibold">Appetizer</h3>
              <p className="text-base-content mt-2">
                Start your meal with a selection of appetizers including Bruschetta, Stuffed Mushrooms, and more. Perfect for sharing or for a light start.
              </p>
            </TabPanel>
            <TabPanel>
              <h3 className="text-xl font-semibold">Salad</h3>
              <p className="text-base-content mt-2">
                Fresh and vibrant salads with seasonal greens, veggies, and a variety of dressings. Try our Caesar Salad, Greek Salad, and more.
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FoodSpecialties;
