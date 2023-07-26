import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
  history,
}) => {
  let isFirst = 'ignoreFirst';
  return (
    <>
      {/* <img
        src="https://i.ibb.co/JtX6X7g/Linux-Diary-D1-S1-thin.gif"
        alt="wargames"
        className="text-image"
      /> */}
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index} id={isFirst}>
          {isFirst && (isFirst = '')}
          {1 && (
            <div className="flex flex-row space-x-2">
              <div className="flex-shrink">
                <Ps1 />
              </div>

              <div className="flex-grow">{entry.command}</div>
            </div>
          )}

          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;

{
  /* {entry.command && (<div className="flex flex-row space-x-2">
  <div className="flex-shrink">
    <Ps1 />
  </div>

  <div className="flex-grow">{entry.command}</div>
</div>)} */
}
