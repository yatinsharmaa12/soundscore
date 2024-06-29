/*
  Warnings:

  - A unique constraint covering the columns `[listner_id,task_id]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Submission_listner_id_task_id_key" ON "Submission"("listner_id", "task_id");
