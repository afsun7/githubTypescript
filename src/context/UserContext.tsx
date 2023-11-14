import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface dataContext {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
interface Props {
  children: React.ReactElement;
}

export const UserContext = createContext<dataContext | null>(null);
export default function UserProvider({ children }: Props) {
  const [data, setData] = useState<dataContext[]>([]);
  const [text, setText] = useState<string>("");
  const [loadingImage, setLoading] = useState<boolean>(false);
  //get users
  async function getSearch() {
    if (text) {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setTimeout(() => {
        setData([...data.items]);
        setLoading(false);
      }, 1000);

      setText("");
    }
  }
  useEffect(() => {
    getSearch();
  }, [text]);
  //end get users
  
  return <UserContext.Provider value={{data}}>{children}</UserContext.Provider>;
}
