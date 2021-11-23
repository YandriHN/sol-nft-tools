import { useRef } from "react";
import { ENDPOINTS } from "../util/endpoints";

export function SelectNetwork({selectedKey, endpoint, setEndpoint}) {
  const selectRef = useRef<HTMLSelectElement>();

  return (
    selectedKey !== "ar-links" && (
      <div className="form-control" style={{ maxWidth: 400, margin: "0 auto" }}>
        <select
          ref={selectRef}
          id="rpc"
          className="select ml-8"
          defaultValue={endpoint}
          style={{ minWidth: 200 }}
          onChange={(e) => setEndpoint(e.target.value)}
        >
          {ENDPOINTS.map((ep) => (
            <option key={ep.name} value={ep.endpoint}>
              {ep.name} ({ep.endpoint})
            </option>
          ))}
        </select>
      </div>
    )
  );
}