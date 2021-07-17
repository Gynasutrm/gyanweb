export const defaultCorrectAnsList = [];
export const defaultOptionList = [];
const defaultOption = 4;

for (let index = 1; index <= defaultOption; index++) {
	defaultCorrectAnsList.push({ id: index, name: 'Option ' + `${index}` });
	defaultOptionList.push({
		Editor_id: `${index}`,
		Editor_name: 'Option ' + `${index}`,
	});
}
