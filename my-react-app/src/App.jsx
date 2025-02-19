import { useState } from "react";
import { Input, Button, Table, Spin, Alert } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Lottie from "react-lottie";
import animationData from "./assets/Animation - 1739784311411.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm2, setSearchTerm2] = useState(""); // New search term state for second search
  const [result2, setResult2] = useState([]); // New result state for second search
  const [loading2, setLoading2] = useState(false); // Loading state for second search
  const [error2, setError2] = useState(null); // Error state for second search

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a valid L2_category_id");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search?L2_category_id=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();
      setResult([data]); // Convert object to array for Ant Design Table
    } catch (err) {
      setError(err.message);
      setResult([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch2 = async () => {
    if (!searchTerm2.trim()) {
      setError2("Please enter a valid L2_category");
      return;
    }

    setLoading2(true);
    setError2(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search-all?L2_category=${searchTerm2}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();
      setResult2([data]); // Convert object to array for Ant Design Table
    } catch (err) {
      setError2(err.message);
      setResult2([]);
    } finally {
      setLoading2(false);
    }
  };

  const columns2 = [
    {
      title: "L0 Category",
      dataIndex: "L0_category",
      key: "L0_category",
    },
    {
      title: "L1 Category",
      dataIndex: "L1_category",
      key: "L1_category",
    },
    {
      title: "L2 Category",
      dataIndex: "L2_category",
      key: "L2_category",
    },
    {
      title: "L2 Category ID",
      dataIndex: "L2_category_id",
      key: "L2_category_id",
    },
  ];

  const columns = [
    {
      title: "L0 Category",
      dataIndex: "L0_category",
      key: "L0_category",
    },
    {
      title: "L1 Category",
      dataIndex: "L1_category",
      key: "L1_category",
    },
    {
      title: "L2 Category",
      dataIndex: "L2_category",
      key: "L2_category",
    },
    {
      title: "L2 Category ID",
      dataIndex: "L2_category_id",
      key: "L2_category_id",
    },
    {
      title: "PDP1",
      dataIndex: "PDP1",
      key: "PDP1",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP2",
      dataIndex: "PDP2",
      key: "PDP2",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP3",
      dataIndex: "PDP3",
      key: "PDP3",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP4",
      dataIndex: "PDP4",
      key: "PDP4",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP5",
      dataIndex: "PDP5",
      key: "PDP5",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP6",
      dataIndex: "PDP6",
      key: "PDP6",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP7",
      dataIndex: "PDP7",
      key: "PDP7",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP8",
      dataIndex: "PDP8",
      key: "PDP8",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP9",
      dataIndex: "PDP9",
      key: "PDP9",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP10",
      dataIndex: "PDP10",
      key: "PDP10",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP11",
      dataIndex: "PDP11",
      key: "PDP11",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP1",
      dataIndex: "PDP1",
      key: "PDP1",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP2",
      dataIndex: "PLP2",
      key: "PLP2",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP3",
      dataIndex: "PLP3",
      key: "PLP3",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP4",
      dataIndex: "PLP4",
      key: "PLP4",
      render: (text) => text || "N/A",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation plays automatically
    animationData: animationData, // The Lottie animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Lottie Animation */}
      <div className="w-full max-w-md mb-4">
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">Search Category</h1>

      {/* First Search Bar */}
      <div className="w-full max-w-md mb-4">
        <Input.Search
          placeholder="Enter L2_category_id"
          enterButton="Search"
          size="large"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      {loading && <Spin size="large" className="mt-4" />}
      {error && (
        <Alert message={error} type="error" showIcon className="mt-4" />
      )}
      {result.length > 0 && (
        <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <Table
            columns={columns}
            dataSource={result}
            rowKey="L2_category_id"
          />
        </div>
      )}

      {/* Second Search Bar */}
      <div className="w-full max-w-md mb-4">
        <Input.Search
          placeholder="Enter L2_category"
          enterButton="Search"
          size="large"
          value={searchTerm2}
          onChange={(e) => setSearchTerm2(e.target.value)}
          onSearch={handleSearch2}
        />
      </div>

      {loading2 && <Spin size="large" className="mt-4" />}
      {error2 && (
        <Alert message={error2} type="error" showIcon className="mt-4" />
      )}
      {result2.length > 0 && (
        <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <Table
            columns={columns2}
            dataSource={result2}
            rowKey="L2_category_id"
          />
        </div>
      )}
    </div>
  );
}

export default App;
