import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <div>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span className="card-author subtle">{curElem.name}</span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-discription subtle">
                      hello, todays special idli, dosa, puri.
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} alt='images' className='card-media'/>

                  <span className="card-tag subtle">order now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
