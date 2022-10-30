import { useState } from 'react';
import SectionTitle from '../sectionTitle';
import WorkBox from './workBox';

export default function Works({ homePage, works }) {
  let numberOfItems = 6;
  if (typeof window != 'undefined') {
    let width = window?.innerWidth;
    console.log('width', width);
    if (width <= 640) {
      numberOfItems = 3;
    }
  }

  const [selectedCategory, setSelectedCAtegory] = useState('');
  const [visibleWorksLength, setVisibleWorksLength] = useState(numberOfItems);
  let ids = [];
  let categories = [];
  let selectedWorks = [];
  let visibleWorks = [];

  console.log('wroks', works);
  works?.forEach((work) => {
    work?.Categories?.forEach((category) => {
      if (category?._id == selectedCategory) {
        selectedWorks.push(work);
      }
      if (!ids?.includes(category?._id)) {
        ids.push(category?._id);
        categories.push(category);
      }
    });
  });

  if (selectedCategory == '') {
    selectedWorks = works;
  }

  visibleWorks = selectedWorks.slice(0, visibleWorksLength);

  console.log('categories ', categories);

  return (
    <section
      id="works"
      className="mt-12 mb-12 z-20 flex flex-col  justify-center items-center  "
    >
      <SectionTitle title="MY WORKS" subTitle="WORKS" />
      <div className="flex flex-wrap justify-center gap-4">
        <span
          className={`py-1.5 px-4 rounded text-secondary-400 ${
            selectedCategory == ''
              ? 'bg-secondary-400 cursor-default text-black'
              : 'bg-secondary-400/30 cursor-pointer text-secondary-400'
          }`}
          onClick={() => {
            if (selectedCategory != '') {
              setSelectedCAtegory('');
            }
          }}
        >
          ALL
        </span>
        {categories?.map((category) => {
          return (
            <span
              key={category?._id}
              className={`py-1.5 px-4 rounded  ${
                selectedCategory == category?._id
                  ? 'bg-secondary-400 cursor-default text-black'
                  : 'bg-secondary-400/30 cursor-pointer text-secondary-400'
              }  `}
              onClick={() => {
                if (selectedCategory != category?._id) {
                  setSelectedCAtegory(category?._id);
                }
              }}
            >
              {category?.title}
            </span>
          );
        })}
      </div>
      <div className="w-full flex-wrap flex flex-row justify-center gap-x-8 gap-y-8  lg:items-stretch pt-6 lg:pt-14">
        {visibleWorks?.map((work) => {
          return <WorkBox key={work?._id} item={work} />;
        })}
      </div>

      {selectedWorks?.length != visibleWorks?.length && (
        <button
          onClick={() =>
            setVisibleWorksLength(visibleWorksLength + numberOfItems)
          }
          className="mt-12 bg-secondary-400 py-1.5 px-4 rounded text-sm	font-medium	"
        >
          LOAD MORE
        </button>
      )}
    </section>
  );
}
