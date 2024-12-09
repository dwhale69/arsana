import React from 'react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

type Transaction = {
  id: string;
  type: 'send' | 'receive';
  amount: string;
  recipient: string;
  date: string;
  time: string;
};

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const isOutgoing = transaction.type === 'send';
  const Icon = isOutgoing ? ArrowUpRight : ArrowDownLeft;
  
  return (
    <div className="flex items-center justify-between p-3 bg-[#FFFEFF] rounded-lg">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded-full ${
          isOutgoing ? 'bg-[#AD24D4]/10' : 'bg-[#7110A3]/10'
        }`}>
          <Icon className={`w-4 h-4 ${
            isOutgoing ? 'text-[#AD24D4]' : 'text-[#7110A3]'
          }`} />
        </div>
        <div>
          <p className="font-medium text-sm">{transaction.recipient}</p>
          <p className="text-xs text-gray-500">{transaction.date} • {transaction.time}</p>
        </div>
      </div>
      <p className={`font-semibold text-sm ${
        isOutgoing ? 'text-[#AD24D4]' : 'text-[#7110A3]'
      }`}>
        {isOutgoing ? '-' : '+'}{transaction.amount}
      </p>
    </div>
  );
};

const RecentActivity = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'send',
      amount: '250,000 IDR',
      recipient: 'Jane Smith',
      date: 'Today',
      time: '14:30'
    },
    {
      id: '2',
      type: 'receive',
      amount: '1,500,000 IDR',
      recipient: 'Salary Deposit',
      date: 'Today',
      time: '10:15'
    },
    {
      id: '3',
      type: 'send',
      amount: '75,000 IDR',
      recipient: 'Electric Bill',
      date: 'Yesterday',
      time: '16:45'
    }
  ];

  return (
    <div className="bg-[#EDEBEC] rounded-xl p-3">
      <h2 className="text-base font-semibold mb-3 px-1">Recent Activity</h2>
      <div className="space-y-2">
        {transactions.map(transaction => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;