import { useState } from "react";

function usePreviousOrder() {
    const [orderedItems, setOrderedItems] = useState([]) 
    return {
        orderedItems,
        setOrderedItems
      }
}

export default usePreviousOrder