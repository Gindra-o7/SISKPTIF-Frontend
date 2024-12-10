import React from "react";
import { ChevronRight, LucideIcon, FileCheck, FileClock, FileX,  } from "lucide-react";

export interface CardData {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

export const Card: React.FC<CardData> = ({ title, description, path, icon: Icon }) => {
  return (
    <a
      href={path}
      className="block bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:border-blue-600"
    >
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center justify-center p-3 bg-blue-50 rounded-full transition-colors duration-300 hover:bg-blue-100 group">
          <Icon className="w-6 h-6 text-black transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center gap-1 text-black-400 font-bold">
        Details
        <ChevronRight className="w-4 h-4" />
      </div>
    </a>
  );
};

interface BaseProps {
  value: string;
}

interface BasicStat extends BaseProps {
  variant: "basic";
  label: string;
}

interface DetailedStat extends BaseProps {
  variant: "detailed";
  title: string;
  description: string;
}

type StatProps = BasicStat | DetailedStat;

export const CardStat: React.FC<StatProps> = (props) => {
  if (props.variant === "basic") {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="text-3xl font-bold text-blue-600">{props.value}</div>
        <div className="text-sm text-gray-600">{props.label}</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="text-base font-semibold text-gray-800">{props.title}</div>
      <div className="text-3xl font-bold text-blue-600 mt-1">{props.value}</div>
      <div className="text-sm text-gray-500 mt-2">{props.description}</div>
    </div>
  );
};

type StatusType = "revisi" | "diterima" | "menunggu";

interface CardUploadProps {
  number: string | number;
  date: string;
  status: StatusType;
  onStatusClick: () => void;
}

export const CardUpload: React.FC<CardUploadProps> = ({
  number,
  date,
  status,
  onStatusClick,
}) => {
  const getBackgroundColor = (): string => {
    if (status === "revisi") {
      return "bg-red-100";
    } else if (status === "diterima") {
      return "bg-green-100";
    } else {
      return "bg-yellow-100";
    }
  };

  const getStatusColor = (): string => {
    if (status === "revisi") {
      return "bg-red-500 text-white";
    } else if (status === "diterima") {
      return "bg-green-400 text-white";
    } else {
      return "bg-yellow-400 text-white";
    }
  };

  return (
    <div className={`p-4 rounded-xl mb-4 sm:p-6 ${getBackgroundColor()}`}>
      <div className="flex flex-col justify-between items-start sm:flex-row">
        <div>
          <div
            className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full mb-1 sm:mb-2 ${getStatusColor()}`}
          >
            {status === "revisi" && <FileX className="w-5 h-5 mr-1" />}
            {status === "diterima" && <FileCheck className="w-5 h-5 mr-1" />}
            {status === "menunggu" && <FileClock className="w-5 h-5 mr-1" />}
            {status}
          </div>
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 mt-4 ">
            Pengajuan #{number}
          </h5>
        </div>
        <div className="text-left sm:mt-0 sm:text-right">
          <p className="font-semibold text-gray-600 mb-1  sm:mb-2">{date}</p>
          <button
            onClick={onStatusClick}
            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-4"
          >
            View
            <ChevronRight className="w-4 h-4 ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
