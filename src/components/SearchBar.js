import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const resources = [
    {
      id: "utterly",
      categoryId: "sci-fi-fantasy",
      title:
        "The Utterly Uninteresting and Unadventurous Tales of Fred, the Vampire Accountant",
      author: "Drew Hayes",
    },
    {
      id: "angry-planet",
      categoryId: "sci-fi-fantasy",
      title: "The Long Way to a Small, Angry Planet",
      author: "Becky Chambers",
    },
    {
      id: "technically-wrong",
      categoryId: "non-fiction",
      title:
        "Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech",
      author: "Sara Wachter-boettcher",
    },
    {
      id: "orconomics",
      categoryId: "sci-fi-fantasy",
      title: "Orconomics",
      author: "J. Zachary Pike",
    },
    {
      id: "dial-d-for-deadman",
      categoryId: "sci-fi-fantasy",
      title: "Dial D for Deadman",
      author: "Barry J. Hutchison",
    },
    {
      id: "talk-about-race",
      categoryId: "non-fiction",
      title: "So You Want to Talk About Race",
      author: "Ijeoma Oluo",
    },
    {
      id: "the-testaments",
      categoryId: "literature",
      title: "The Testaments",
      author: "Margaret Atwood",
    },
    {
      id: "will-save-the-galaxy",
      categoryId: "sci-fi-fantasy",
      title: "Will Save the Galaxy for Food",
      author: "Yahtzee Croshaw",
    },
    {
      id: "storm-front",
      categoryId: "sci-fi-fantasy",
      title: "Storm Front: The Dresden Files",
      author: "Jim Butcher",
    },
    {
      id: "hard-luck-hank",
      categoryId: "sci-fi-fantasy",
      title: "Hard Luck Hank: Screw the Galaxy",
      author: "Steven Campbell",
    },
    {
      id: "andrew-vernon-1",
      categoryId: "sci-fi-fantasy",
      title: "Andrea Vernon and the Corporation for UltraHuman Protection",
      author: "Alexander C Kane",
    },
    {
      id: "andrew-vernon-2",
      categoryId: "sci-fi-fantasy",
      title: "Andrea Vernon and the Superhero-Industrial Complex",
      author: "Alexander C Kane",
    },
    {
      id: "off-to-be-the-wizard",
      categoryId: "sci-fi-fantasy",
      title: "Off to Be the Wizard",
      author: "Scott Meyer",
    },
    {
      id: "master-of-formalities",
      categoryId: "sci-fi-fantasy",
      title: "Master of Formalities",
      author: "Scott Meyer",
    },
    {
      id: "the-authorities",
      categoryId: "sci-fi-fantasy",
      title: "The Authorities",
      author: "Scott Meyer",
    },
    {
      id: "expanse-1",
      categoryId: "sci-fi-fantasy",
      title: "Leviathan Wakes: The Expanse, book 1",
      author: "James S. A. Corey",
    },
    {
      id: "expanse-2",
      categoryId: "sci-fi-fantasy",
      title: "Caliban's War: The Expanse, book 2",
      author: "James S. A. Corey",
    },
    {
      id: "anansi-boys",
      categoryId: "sci-fi-fantasy",
      title: "Anansi Boys",
      author: "Neil Gaiman",
    },
    {
      id: "fuzzy-nation",
      categoryId: "sci-fi-fantasy",
      title: "Fuzzy Nation",
      author: "John Scalzi",
    },
    {
      id: "ghost-in-the-wires",
      categoryId: "non-fiction",
      title:
        "Ghost in the Wires: My Adventures as the World’s Most Wanted Hacker",
      author: "Kevin Mitnick",
    },
    {
      id: "a-brief-history",
      categoryId: "non-fiction",
      title: "A Brief History of Time",
      author: "Stephen Hawking",
    },
    {
      id: "killing-floor",
      categoryId: "thriller",
      title: "Killing Floor: a Jack Reacher novel",
      author: "Lee Child",
    },
    {
      id: "darkness",
      categoryId: "thriller",
      title: "A Darkness More than Night: Harry Bosch Series",
      author: "Michael Connelly",
    },
    {
      id: "neuromancer",
      categoryId: "sci-fi-fantasy",
      title: "Neuromancer",
      author: "William Gibson",
    },
    {
      id: "14",
      categoryId: "sci-fi-fantasy",
      title: "14: Threshold Universe series",
      author: "Peter Clines",
    },
    {
      id: "martian",
      categoryId: "literature",
      title: "The Martian",
      author: "Andy Weir",
    },
  ];
  return (
    <Wrapper>
      <Input
        placeholder="Search for resources"
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            console.log(event.target.value);
          }
        }}
      />

      {value.length > 1 && (
        <List>
          {resources
            .filter((result) => {
              return (
                result.title.toLowerCase().indexOf(value.toLowerCase()) >= 0
              );
            })
            .map((suggestion) => {
              let boldSection = suggestion.title.slice(
                suggestion.title.toLowerCase().indexOf(value.toLowerCase()) +
                  value.length
              );
              let frontSection = suggestion.title.slice(
                0,
                suggestion.title.toLowerCase().indexOf(value.toLowerCase()) +
                  value.length
              );
              return (
                <Suggestion
                  to={`/profile/${suggestion._id}`}
                  key={suggestion.id}
                >
                  <span>
                    {frontSection}
                    <Prediction>{boldSection}</Prediction>
                  </span>
                  <span style={{ fontStyle: "italic", fontSize: "14px" }}>
                    {" "}
                    in{" "}
                    <span
                      style={{
                        color: "green",
                        textTransform: "capitalize",
                      }}
                    >
                      Users
                    </span>
                  </span>
                </Suggestion>
              );
            })}
        </List>
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  min-width: 500px;
  margin-right: 10px;
  color: black;
  background-color: white;
  border: grey 1px solid;
  border-radius: 4px;
  padding: 8px;
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

const Suggestion = styled(Link)`
  padding: 10px;
  &:hover {
    background-color: beige;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;
