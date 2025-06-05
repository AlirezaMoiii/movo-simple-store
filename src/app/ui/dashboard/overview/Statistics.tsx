import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const statics = [
  {
    id: 1,
    title: "products",
    description: "all of our products yet",
    amount: 234231,
  },
  {
    id: 2,
    title: "orders",
    description: "we've finished this much successful orders",
    amount: 41231,
  },
  {
    id: 3,
    title: "users",
    description: "users that have signed up",
    amount: 562931,
  },
  {
    id: 4,
    title: "income",
    description: "all the websites income",
    amount: 421231,
  },
];

function Statistics() {
  return (
    <div className="!w-full flex flex-row justify-evenly">
      {statics.map((st) => {
        return (
          <Card key={st.id} className="w-64 flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="uppercase">{st.title}</CardTitle>
              <CardDescription>{st.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="default" className="text-md">{st.amount}</Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Statistics;
