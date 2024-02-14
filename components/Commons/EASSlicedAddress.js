// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
export default ({ Address }) => {
  return (
    // <TooltipProvider>
    //   <Tooltip>
    //     <TooltipTrigger asChild>
    //       <p>
    <b>{Address?.slice(0, 6) + "..." + Address?.slice(38, 42)}</b>
    //       </p>
    //     </TooltipTrigger>
    //     <TooltipContent>
    //       <p>{Address}</p>
    //     </TooltipContent>
    //   </Tooltip>
    // </TooltipProvider>
  );
};
