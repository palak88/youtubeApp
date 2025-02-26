import { useRouter } from "next/navigation";
import { Container, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { VideoList } from "@/components/VideoList";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>("");
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${searchValue}&part=snippet&maxResults=10&type=video&key=`
    );

    fetchData
      .then((response) => response?.json())
      .then((data) => setList(data?.items));
  }, [searchValue]);

  console.log(list);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      router.push("/login");
    }
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <TextField
          label="Search"
          fullWidth
          margin="normal"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Box>

      <VideoList list={list} />
    </Container>
  );
};

export default Dashboard;
