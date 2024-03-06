import React from "react";
import TrendingCoinsCarousel from "./TrendingCoinsCarousel";

const YouMayAlsoLike = ({data, loading}) => {

    if(loading || !data) {

        console.log("Here");

        return(
            <div className="flex items-center justify-center w-[100vw] h-[100vh]">
                Laoding ...
            </div>
        )
    }
    
    const coinsData = data?.coins;
    console.log(coinsData);

    return(
        <div className=" bg-white p-6 flex  flex-col gap-6 w-full rounded-lg lg:rounded-none lg:p-16">
            <h1 className="font-semibold text-3xl">
                You May Also Like
            </h1>
            
            <TrendingCoinsCarousel data={coinsData} loading={loading} />

            <h2 className="font-semibold text-2xl">
                Trending Coins
            </h2>

            <TrendingCoinsCarousel data={coinsData} loading={loading} />
        </div>
    );
}

export default YouMayAlsoLike;