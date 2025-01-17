import { useRouter } from "next/router";
import { useRef } from "react";
import { useEndpoint } from "../hooks/use-endpoint";
import { ENDPOINTS } from "../util/endpoints";

export function SelectNetwork() {
  const router = useRouter();
  const { endpoint, setEndpoint } = useEndpoint();
  const selectRef = useRef<HTMLSelectElement>();

  return (
    router.pathname !== "/get-ar-links" && (
      <div className="form-control justify-center">
        <select
          ref={selectRef}
          id="rpc"
          className="select ml-8"
          defaultValue={endpoint}
          style={{ minWidth: 200, minHeight: "2rem", height: "2rem" }}
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
