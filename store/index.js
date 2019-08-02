import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      projects: [
        {
          id: "1",
          name: "Kirche Buxach",
          assignedCategories: ["1"],
          year: 2019,
          order: 1
        },
        {
          id: "2",
          name: "Amtsgericht Memmingen",
          assignedCategories: ["1", "2"],
          year: 2019,
          order: 2
        },
        {
          id: "3",
          name: "Landgericht Memmingen",
          assignedCategories: ["1", "2"],
          year: 2019,
          order: 3
        },
        {
          id: "4",
          name: "Feuerwehrhaus Amendingen",
          assignedCategories: ["2", "5"],
          year: 2019,
          order: 4
        },
        {
          id: "5",
          name: "Siebendächer Memmingen",
          assignedCategories: ["4", "6"],
          year: 2019,
          order: 5
        },
        {
          id: "6",
          name: "Kirche Niederrieden",
          assignedCategories: ["1"],
          year: 2019,
          order: 6
        },
        {
          id: "7",
          name: "Josef Hebel Memmingen",
          assignedCategories: ["5"],
          year: 2018,
          order: 7
        },
        {
          id: "8",
          name: "Josef Hebel Memmingen",
          assignedCategories: ["6"],
          year: 2018,
          order: 8
        },
        {
          id: "9",
          name: "Zollamt Memmingen",
          assignedCategories: ["1", "2", "5"],
          year: 2018,
          order: 9
        },
        {
          id: "10",
          name: "Regens Wagner Memmingen",
          assignedCategories: ["4"],
          year: 2017,
          order: 10
        },
        {
          id: "11",
          name: "Grünwalder Stadion, München",
          assignedCategories: ["7"],
          year: 2016,
          order: 11
        },
        {
          id: "12",
          name: "Haus L, Memmingen",
          assignedCategories: ["6"],
          year: 2015,
          order: 12
        },
        {
          id: "13",
          name: "Turn- und Festhalle Fellheim",
          assignedCategories: ["1", "2", "3"],
          year: 2014,
          order: 13
        },
        {
          id: "14",
          name: "Turnhalle Ettringen",
          assignedCategories: ["2", "3"],
          year: 2013,
          order: 14
        },
        {
          id: "15",
          name: "Glassteg, Memmingen",
          assignedCategories: ["7"],
          year: 2013,
          order: 15
        },
        {
          id: "16",
          name: "Wettbewerb Sparkasse Memmingen",
          assignedCategories: ["7"],
          year: 2013,
          order: 16
        },
        {
          id: "17",
          name: "Riedmuseum Benningen",
          assignedCategories: ["1", "2"],
          year: 2012,
          order: 17
        },
        {
          id: "18",
          name: "Bernhard Strigl Gymnasium Memmingen",
          assignedCategories: ["1", "2", "3"],
          year: 2012,
          order: 18
        },
        {
          id: "19",
          name: "Wettbewerb Rotergasse, Memmingen",
          assignedCategories: ["7"],
          year: 2012,
          order: 19
        },
        {
          id: "20",
          name: "Autohaus Esenwein",
          assignedCategories: ["5"],
          year: 2011,
          order: 20
        },
        {
          id: "21",
          name: "Haus H , Aitrach",
          assignedCategories: ["6"],
          year: 2011,
          order: 21
        },
        {
          id: "22",
          name: "Haus R2, Ochsenhausen",
          assignedCategories: ["6"],
          year: 2011,
          order: 22
        },
        {
          id: "23",
          name: "Kolping Kapstadt",
          assignedCategories: ["2"],
          year: 2010,
          order: 23
        },
        {
          id: "24",
          name: "Kolping Ohlstadt",
          assignedCategories: ["6"],
          year: 2009,
          order: 24
        },
        {
          id: "25",
          name: "Wettbewerb Städtische Realschule, Memmingen",
          assignedCategories: ["7"],
          year: 2009,
          order: 25
        },
        {
          id: "26",
          name: "Stadion Memmingen",
          assignedCategories: ["2", "3"],
          year: 2007,
          order: 26
        },
        {
          id: "27",
          name: "Kuroase Bad Wörishofen",
          assignedCategories: ["1", "4", "6"],
          year: 2006,
          order: 27
        },
        {
          id: "28",
          name: "Haus R,",
          assignedCategories: ["6"],
          year: 2005,
          order: 28
        },
        {
          id: "29",
          name: "Kloster Roggenburg",
          assignedCategories: ["1"],
          year: 2003,
          order: 29
        },
        {
          id: "30",
          name: "Schloss Lautrach",
          assignedCategories: ["1"],
          year: 2003,
          order: 30
        },
        {
          id: "31",
          name: "Villa Leuchtenberg",
          assignedCategories: ["1"],
          year: 2002,
          order: 31
        },
        {
          id: "32",
          name: "Parkhaus Krautstraße",
          assignedCategories: ["2"],
          year: 1989,
          order: 32
        }
      ],

      sparten: [
        {
          id: 1,
          displayname: "Sanierung/Umbau",
          order: 1
        },
        {
          id: 2,
          displayname: "Öffentlich",
          order: 2
        },
        {
          id: 3,
          displayname: "Schule/Sport",
          order: 3
        },
        {
          id: 4,
          displayname: "Gesundheit/Pflege",
          order: 4
        },
        {
          id: 5,
          displayname: "Gewerbe/Industrie",
          order: 5
        },
        {
          id: 6,
          displayname: "Wohnen / Hotel",
          order: 6
        },
        {
          id: 7,
          displayname: "Wettbewerbe",
          order: 7
        }
      ]
    },

    getters: {
      getProjectByID: state => id => {
        return state.projects.find(ele => {
          return ele.id === id;
        });
      },

      getProjectByCategory: state => category_id => {
        return state.projects.map(ele => ({
          ...ele,
          assignedCategories: ele.assignedCategories.includes(category_id)
        }));
      }
    }
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
