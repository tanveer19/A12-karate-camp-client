import React from "react";

const GridSection = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-4 w-3/4 mx-auto">
        <div class="...">01</div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div>
    </div>
  );
};

export default GridSection;
